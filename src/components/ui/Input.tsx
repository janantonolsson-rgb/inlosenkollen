import { cn } from '../../lib/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: string
  inputSize?: 'default' | 'sm'
}

export function Input({ className, suffix, inputSize = 'default', ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        className={cn(
          'w-full rounded-lg border border-border bg-surface-elevated text-primary',
          'placeholder:text-muted-light',
          'transition-colors hover:border-border',
          'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15',
          inputSize === 'default' && 'min-h-[44px] px-3.5 py-2.5 text-sm',
          inputSize === 'sm' && 'min-h-[36px] px-2.5 py-1.5 text-sm',
          suffix && 'pr-10',
          className,
        )}
        {...props}
      />
      {suffix && (
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-muted">
          {suffix}
        </span>
      )}
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border border-border bg-surface-elevated px-3.5 py-2.5 text-sm text-primary',
        'placeholder:text-muted-light',
        'transition-colors hover:border-border',
        'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15',
        className,
      )}
      {...props}
    />
  )
}
