"use client";
import BootstrapClient from "@/utils/Bootstrap/BootstrapClient";
import Head from "next/head";
import { AuthProvider } from "@/context/AuthContext"; // ✅ import context

// CSS imports
import '../vendor/trumbowyg/trumbowyg.min.css';
import 'filepond/dist/filepond.min.css';
import '../vendor/fontawesome/css/all.css';
import '../vendor/datatable/datatable2/buttons.dataTables.min.css';
import '../vendor/prism/prism.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../vendor/animation/animate.min.css';
import '../vendor/datatable/jquery.dataTables.min.css';
import '../vendor/weather/weather-icons.css';
import '../vendor/animated_icon/mdi-light.css';
import '../vendor/ionio-icon/css/iconoir.css';
import '../vendor/leafletmaps/leaflet.css';
import '../vendor/vector-map/jquery-jvectormap.css';
import '../vendor/shepherdjs/shepherd.css';
import '../vendor/jstree/style.min.css';
import '../vendor/dual_listboxes/dual-listbox.css';
import '../vendor/fullcalendar/global.js';
import '../vendor/slick/slick.css';
import '../vendor/datepikar/flatpickr.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import "../vendor/tabler-icons/tabler-icons.css";
import "../vendor/phosphor/phosphor-light.css";
import "../vendor/flag-icons-master/flag-icon.css";
import "../vendor/vector-map/jquery-jvectormap.css";
import "../vendor/nouislider/nouislider.min.css";
import 'simplebar-react/dist/simplebar.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../vendor/select/select2.min.css';
import "../scss/style.scss";
import "../scss/responsive.scss";
import './globle.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo/favicon.png" type="image/x-icon"/>
        <link rel="shortcut icon" href="/images/logo/favicon.png" type="image/x-icon"/>
        <meta name="msapplication-TileImage" content="/images/logo/favicon.png"/>
      </Head>
      <body className="ltr light">
        {/* ✅ Wrap app with AuthProvider */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
      <BootstrapClient />
    </html>
  );
}
