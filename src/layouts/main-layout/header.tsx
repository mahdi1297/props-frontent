import { Input } from "UI/components/form/input";
import "./style.scss";
import IconSvg from  './../../assets/icons/search.svg'

export const Header = () => {
  return (
    <header className="header w-100 pos-fixed pr-24">
      <div className="w-100 h-100 d-flex justify-between align-center">
        <div className="search_box-wrapper">
          <Input placeholder="جست و جو"/>
          <span className="search-icon pos-absolute">
            <img src={IconSvg} alt=""/>
          </span>
        </div>
      </div>
    </header>
  );
};
