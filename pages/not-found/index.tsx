import React from "react";
import { useTranslation } from "react-i18next";

import { DefaultLayout } from "../../components/default-layout";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      {t(
        "Sorry, the page you are looking for does not exist or you do not have permission to see it",
      )}
    </DefaultLayout>
  );
}
