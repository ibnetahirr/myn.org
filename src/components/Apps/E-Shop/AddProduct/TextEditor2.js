import React from 'react';
import Trumbowyg from 'react-trumbowyg';

const TextEditor2 = () => {
    return (
        <Trumbowyg
            id="editor1"
            data={"Hello, World! !"}
            buttons={[
                ['strong', 'em'],
                ['justifyLeft', 'justifyCenter'],
                ['insertImage', 'link'],
            ]}
            onChange={()=>{}}
        />
    );
};

export default TextEditor2;