import { ReactNode } from 'react';
import s from './HeaderButton.module.css';
export const HeaderButton = ({ children }: { children: ReactNode }) => {
  return <button className={s.HeaderButton}>{children}</button>;
};
