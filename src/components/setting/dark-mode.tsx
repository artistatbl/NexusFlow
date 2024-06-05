'use client'
import { useThemeMode } from '@/hooks/settings/use-setting'
import React from 'react'
import Section from '../section'
import { cn } from '@/lib/utils'
import { SystemMode } from '../theme-holder/system-theme'
import { LightMode } from '../theme-holder/light-theme'
import { DarkMode } from '../theme-holder/dark-theme'

type Props = {}

const DarkModetoggle = (props: Props) => {
  const { setTheme, theme } = useThemeMode()

  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Interface Theme"
          message="Select or customize your UI theme "
        />
      </div>
      <div className="lg:col-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div>
          <div
            className={cn(
              'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
              theme == 'system' && 'border-orange'
            )}
            onClick={() => setTheme('system')}
          >
            <SystemMode />
          </div>
          <p className="text-gray-500 text-sm text-center justify-center mt-2">System Preferences</p>
        </div>

        <div>
          <div
            className={cn(
              'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
              theme == 'light' && 'border-orange'
            )}
            onClick={() => setTheme('light')}
          >
            <LightMode />
          </div>
          <p className="text-gray-500 text-sm text-center justify-center mt-2">Light Mode</p>
        </div>

        <div>
          <div
            className={cn(
              'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
              theme == 'dark' && 'border-orange'
            )}
            onClick={() => setTheme('dark')}
          >
            <DarkMode />
          </div>
          <p className="text-gray-500 text-sm text-center justify-center mt-2">Dark Mode</p>
        </div>
      </div>
    </div>
  )
}

export default DarkModetoggle
