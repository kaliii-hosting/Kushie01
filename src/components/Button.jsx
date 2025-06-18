import { Link } from 'react-router-dom'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  href, 
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-neon-orange text-white btn-glow hover:bg-neon-orange-hover',
    secondary: 'bg-huly-blue text-white btn-glow btn-glow-blue hover:brightness-110',
    outline: 'border border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-white',
    ghost: 'text-gray-300 hover:text-neon-orange hover:bg-neon-orange/10'
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button