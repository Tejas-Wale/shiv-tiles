const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = false,
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';

  return (
    <div
      className={`
        bg-white rounded-lg shadow-md
        ${paddingClasses[padding]}
        ${hoverClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
