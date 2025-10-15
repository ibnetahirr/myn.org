"use client";
import {useEffect} from "react";

const TextEditor = () => {
    useEffect(() => {
        $('#editor').trumbowyg({
            svgPath: false,
            btns: [
                ['viewHTML'],
                ['undo', 'redo'],
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['fullscreen']
            ],
        });

        $('#editor1').trumbowyg({
            svgPath: false,
            btns: [
                ['strong', 'em'],
                ['justifyLeft', 'justifyCenter'],
                ['insertImage', 'link'],
            ],
        });


        "use strict";
        $(function() {
            var tooltip_init = {
                init: function () {
                    $("button").tooltip();
                }
            };
            tooltip_init.init()
        });
    })
    return null;
};

export default TextEditor;
