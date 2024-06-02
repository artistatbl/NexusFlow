import { useToast } from '@/components/ui/use-toast'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'






export const useThemeMode = () => {
	const { setTheme, theme } = useTheme()
	return {
	  setTheme,
	  theme,
	}
   }
   