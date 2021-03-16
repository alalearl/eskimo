const SystemAlert = ({
  children,
  type,
  title,
}: {
  children?: React.ReactNode;
  type?: string;
  title?: string;
}) => {
  return (
    <div className="absolute left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 w-screen h-screen">
      <div className=" max-w-80 max-h-80 flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-gray-100">
        <div className={`p-5 rounded-2xl ${children ? 'rounded-b' : ''}`}>
          <span className={`text-2xl ${typeClass(type)}`}>{title}</span>
        </div>
        {children ? (
          <div className="p-5 bg-white w-full rounded-2xl rounded-t">
            {children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const typeClass = (type: string) => {
  switch (type) {
    case 'default':
      return 'text-gray-600';
    case 'error':
      return 'text-red-600';
    case 'warning':
      return 'text-yellow-500';
  }
};

export default SystemAlert;
