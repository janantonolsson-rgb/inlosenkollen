import { cn } from '../../lib/cn'

type PageContainerSize = 'sm' | 'md' | 'lg' | 'xl'

interface PageContainerProps {
  children: React.ReactNode
  size?: PageContainerSize
  className?: string
}

const sizeClasses: Record<PageContainerSize, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
}

export function PageContainer({ children, size = 'xl', className }: PageContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  )
}
