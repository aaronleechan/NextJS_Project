import Image from 'next/image';
import Link from 'next/link';
import styles from './SidebarLayout.module.scss';
import {
  sideBarLogoLayoutList,
  sidebarTextLayoutList,
} from '../../../lib/Layouts/sidebarLayout';
import { IImageRender, ITextRender, ISidebarLayout } from './SidebarInterface';

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const imageRender = (variable: IImageRender, index: number) => {
    const { src, alt, width, height, url, external } = variable;

    const imageLogoRender = () => {
      return (
        <span className={styles.logo}>
          <Image
            loader={() => src}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </span>
      );
    };

    if (external) {
      return (
        <a href={url} target="_blank" key={index}>
          {imageLogoRender()}
        </a>
      );
    }
    return (
      <Link href={url} key={index}>
        {imageLogoRender()}
      </Link>
    );
  };

  const textRender = (variable: ITextRender, index: number) => {
    const { title, url } = variable;
    return (
      <Link href={url} key={index}>
        <a>{title}</a>
      </Link>
    );
  };

  return (
    <nav className={styles.nav}>
      <div>
        {sideBarLogoLayoutList.map((variable: any, index: number) => {
          return imageRender(variable, index);
        })}
      </div>
      {sidebarTextLayoutList.map((variable: any, index: number) => {
        return textRender(variable, index);
      })}
    </nav>
  );
};

export default SidebarLayout;
