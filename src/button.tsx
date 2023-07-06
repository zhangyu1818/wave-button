import * as React from 'react'
import { MotionWave, type WaveConfig, type WaveHandler } from 'motion-wave'
import { useButton, type AriaButtonProps } from '@react-aria/button'
import { clsx } from 'clsx'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const mergeRef =
  (ref1: React.MutableRefObject<unknown>, ref2: unknown) => (node: unknown) => {
    ref1.current = node
    if (typeof ref2 === 'function') {
      ref2(node)
    } else if (typeof ref2 === 'object' && ref2 !== null && 'current' in ref2) {
      ref2.current = node
    }
  }

export type WaveButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  AriaButtonProps
export const WaveButton = React.forwardRef<unknown, WaveButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      onMouseEnter: propsOnMouseEnter,
      onMouseLeave: propsOnMouseLeave,
      ...restProps
    } = props

    const btnRef = React.useRef<HTMLButtonElement | null>(null)
    const waveHandlerRef = React.useRef<WaveHandler | null>(null)
    const storedInitConfig = React.useRef<Partial<WaveConfig>>({})

    const [offset, setOffset] = React.useState(0)
    const isFocused = React.useRef(false)
    const isHover = React.useRef(false)
    const { buttonProps } = useButton(restProps, btnRef)

    const { onFocus: propsOnFocus, onBlur: propsOnBlur } = buttonProps

    useIsomorphicLayoutEffect(calcInitialOffset, [])
    function calcInitialOffset() {
      if (btnRef.current && waveHandlerRef.current) {
        const { width, height } = btnRef.current.getBoundingClientRect()

        waveHandlerRef.current.resize(width, height)

        const ratio = width / height

        const frequency = clamp(ratio / 10, 0.8, 5)
        const amplitude = frequency * 150

        const initOffset = height / 2 + amplitude

        storedInitConfig.current = { frequency, amplitude, offset: initOffset }

        waveHandlerRef.current.setConfig({
          frequency,
          amplitude,
          offset: initOffset,
          speed: 5,
        })

        setOffset(initOffset)
      }
    }

    const applyEffect = () => {
      if (!waveHandlerRef.current) {
        return
      }
      if (isFocused.current) {
        if (isHover.current) {
          setOffset(-storedInitConfig.current.offset!)
        } else {
          waveHandlerRef.current.setConfig({ frequency: 1, amplitude: 15 })
          setOffset(0)
        }
      } else if (isHover.current) {
        if (isFocused.current) {
          waveHandlerRef.current.setConfig({ frequency: 1, amplitude: 15 })
        } else {
          waveHandlerRef.current.setConfig(storedInitConfig.current)
          setOffset(-storedInitConfig.current.offset!)
        }
      } else if (!isFocused.current) {
        if (isHover.current) {
          waveHandlerRef.current.setConfig({
            frequency: storedInitConfig.current.frequency,
            amplitude: storedInitConfig.current.amplitude,
          })
        } else {
          setOffset(storedInitConfig.current.offset!)
        }
      }
    }

    const onMouseEnter: React.MouseEventHandler<HTMLButtonElement> = (
      event
    ) => {
      isHover.current = true
      propsOnMouseEnter?.(event)
      applyEffect()
    }

    const onMouseLeave: React.MouseEventHandler<HTMLButtonElement> = (
      event
    ) => {
      isHover.current = false
      propsOnMouseLeave?.(event)
      applyEffect()
    }

    const onFocus: React.FocusEventHandler<HTMLButtonElement> = (event) => {
      isFocused.current = true
      propsOnFocus?.(event)
      applyEffect()
    }

    const onBlur: React.FocusEventHandler<HTMLButtonElement> = (event) => {
      isFocused.current = false
      propsOnBlur?.(event)
      applyEffect()
    }

    return (
      <button
        className={clsx('wave-button', className)}
        {...buttonProps}
        ref={mergeRef(btnRef, ref)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <MotionWave
          className='motion-wave'
          ref={waveHandlerRef}
          width={0}
          height={0}
          initialConfig={{ frequency: 0, amplitude: 0, speed: 0 }}
          motionConfig={{
            offset: {
              value: offset,
              loop: false,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        />
        <span className='wave-button-inner'>{children}</span>
      </button>
    )
  }
)
