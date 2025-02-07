import { cn } from "@/lib/utils"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error'
}

export function Alert({ 
  className, 
  variant = 'info',
  ...props 
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-md p-4 border-l-4",
        variant === 'info' && "bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/30",
        variant === 'success' && "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/30",
        variant === 'warning' && "bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-yellow-900/30",
        variant === 'error' && "bg-red-50 border-red-500 text-red-700 dark:bg-red-900/30",
        className
      )}
      {...props}
    />
  )
}
