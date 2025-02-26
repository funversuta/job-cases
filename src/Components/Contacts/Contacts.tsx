import "./Contacts.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

interface ContactsProps {
  name?: string;
}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className="contacts">
      <div className="">Контакты</div>
      <div className="contacts-links">
        <a
          className="main-content__links"
          href="https://t.me/GeorgiyBel"
          target="_blank"
        >
          <TelegramIcon />
        </a>
        <a className="main-content__links" href="mailto:funversuta@gmail.com">
          <EmailIcon />
        </a>
        <a className="main-content__links" href="https://github.com/funversuta">
         <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
