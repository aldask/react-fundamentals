


export default function ChildrenWithTitle ({children, title}) {
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }