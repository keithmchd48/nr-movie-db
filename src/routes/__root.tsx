import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import MainLayout from "components/layouts/MainLayout";
import { useAuthState } from "hooks/useAuthState";
import { useSelector } from "react-redux";
import { RootState } from "store/appStore";
import i18n from "i18next";
import { useEffect } from 'react';

export const Route = createRootRoute({
  component: () => {
    useAuthState();
    const preferredLang: string = useSelector((store: RootState) => store.config.preferredLang);
    console.log('Root render', preferredLang);
    useEffect(() => {
      console.log('Root useEffect', preferredLang);
      i18n.changeLanguage(preferredLang).catch((error) => {
        console.error("Error changing language:", error);
      });
    }, [preferredLang]);
    return (
      <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <TanStackRouterDevtools />
    </>
    );
  },
})