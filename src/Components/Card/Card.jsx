const Card = ({ children, className, ...props }) =>{
    return (
        <div className={`${className}`} {...props}>
          {children}
        </div>
      )
}

export default Card;
