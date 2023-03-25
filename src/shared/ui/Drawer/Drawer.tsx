import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React, {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider'

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
      (x) => {
          if (x.movement[1] < -70) x.cancel();

          if (x.last) {
              if (x.movement[1] > height * 0.5 || (x.velocity[1] > 0.5 && x.direction[1] > 0)) {
                  close();
              } else {
                  openDrawer();
              }
          } else {
              api.start({ y: x.movement[1], immediate: true });
          }
      },
      {
          from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
      },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to(function (py) {
        return py < height ? 'block' : 'none'
    });

    return (
      <Portal>
          <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
              <Overlay onClick={close} />
              <Spring.a.div
                className={cls.sheet}
                style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                {...bind()}
              >
                  {children}
              </Spring.a.div>
          </div>
      </Portal>
    );
});

export const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
});
