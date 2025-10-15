"use client";

import { useEffect } from "react";

const BootstrapClient = () => {
    useEffect(() => {
        import("../../vendor/bootstrap/bootstrap.bundle.min.js");
        import('../../vendor/vector-map/jquery-jvectormap-2.0.5.min');
        import("../../vendor/datatable/jquery.dataTables.min.js");
        import("../../vendor/trumbowyg/trumbowyg.min");
        import("../../vendor/listJs/list-jquery.min");
        import("../../vendor/listJs/list.min");
        setTimeout(() => {
            import('../../vendor/vector-map/jquery-jvectormap-world-mill');
            import('../../vendor/vector-map/africa-mill');
            import('../../vendor/vector-map/asia-mill');
            import('../../vendor/vector-map/ru-mill');
            import('../../vendor/vector-map/europe-mill');
            import('../../vendor/vector-map/jquery-jvectormap-us-lcc');
            import('../../vendor/vector-map/uk_countries-mill');
            import('../../vendor/vector-map/jvectormap-es-mill');
        }, 500)
        import("../../vendor/select/select2.min.js");
        import("../../vendor/phosphor/phosphor.js");
        import("../../vendor/animated_icon/iconify-icon.min");
        import('../../vendor/block-ui/jquery.blockUI');
        import('../../vendor/dual_listboxes/dual-listbox');
        import('../../vendor/googlemap/gmaps');
        import('../../vendor/googlemap/google');
        import("../../components/Forms_Elements/Dual_List_Boxes/initDataListBox");
        import("../CommonJs/index")
    }, []);

    return null;
};

export default BootstrapClient;