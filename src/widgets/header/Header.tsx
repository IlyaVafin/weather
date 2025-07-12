import { HeaderButton } from '@/widgets/header/ui/header-button/HeaderButton';
import Image from 'next/image';
import s from './Header.module.css';
import { Input } from '@/features/search-city/ui/Input';
import { Button } from '@/features/theme-toggle/ui/Button';
import { HeaderCity } from './ui/HeaderCity';

const Header = () => {
  return (
    <header>
      <nav className={s.nav}>
        <div className={s.headerButtons}>
          <HeaderButton>
            <Image width={24} height={24} src="/grid.svg" alt="grid-svg" />
          </HeaderButton>
          <HeaderButton>
            <Image width={24} height={24} src="/bell.svg" alt="bell-svg" />
          </HeaderButton>
          <HeaderCity />
        </div>
        <Input />
        <div className={s.toggleThemeUserAvatar}>
          <Button />
          <Image src="/user-avatar.svg" alt="user-avatar" width={40} height={40} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
