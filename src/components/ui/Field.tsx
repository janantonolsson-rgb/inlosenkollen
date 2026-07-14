import { cn } from '../../lib/cn'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export function Label({ className, children, required, ...props }: LabelProps) {
  return (
    <label
      className={cn('mb-1.5 block text-sm font-medium text-primary', className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  )
}

export function FieldHint({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-xs text-muted">
      {children}
    </p>
  )
}

export function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 text-sm text-red-600" role="alert">
      {children}
    </p>
  )
}
