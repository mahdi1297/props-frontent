import "./style.scss";

export const Avatar = () => {
  return (
    <div className="avatar d-flex align-center">
      <div className="ml-8">
        <figure></figure>
      </div>
      <div className="d-flex flex-col align-start">
        <p className="username font-sm font-bold text-dark">Mahdi Alipoor</p>
        <p className="emai font-xs font-regular text-mute">mahdi@alipoor.com</p>
      </div>
    </div>
  );
};
