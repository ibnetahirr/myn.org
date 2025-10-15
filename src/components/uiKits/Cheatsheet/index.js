"use client";
import {useEffect} from "react";
import CheatSheetBlocks from "@/components/uiKits/Cheatsheet/CheatSheetBlocks";
import Masonry from 'masonry-layout';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";

const Cheatsheet = () => {
    useEffect(()=>{
        new Masonry(".cheatsheet-blocks", {
            percentPosition: true
        });
        Prism.highlightAll();
    },[])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="main-title">Cheatsheet</h4>
                    </div>
                    <div className="col-sm-6 mt-sm-2">
                        <ul className="breadcrumb breadcrumb-start float-sm-end">
                            <li className="d-flex">
                                <i className="ti ti-first-aid-kit f-s-16"></i>
                                <a href="#" className="f-s-14 d-flex gap-2">
                                    <span className="d-none d-md-block">Ui kits</span>
                                </a>
                            </li>
                            <li className="d-flex active">
                                <a href="#" className="f-s-14">Cheatsheet</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="cheatsheet-header">
                            <img src="/images/logo/3.png" alt=""/>
                            <h2>Your Ultimate Cheatsheet</h2>
                            <div className="search-div">
                                <div className="input-group b-r-search">
                                    <span className="input-group-text bg-primary border-0 "><i
                                        className="ti ti-search"></i></span>
                                    <input className="form-control cheatsheet-filter" type="text"
                                           placeholder="Search..." aria-label="Search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CheatSheetBlocks/>
                </div>
                <div className="row code-container code-preview-popup d-none">
                    <div className="col-12 p-0">
                        <div className="code-preview-header d-flex justify-content-between mb-3">
                            <h4 className="m-0 text-white header-preview-text"></h4>
                            <button type="button" className="box-close"><i
                                className="fa fa-close"></i></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-end justify-content-between mg-b-16">
                            <h4 className="text-white">Code</h4>
                            <button type="button" className="btn h-30 w-30 bg-dark text-white p-2 d-flex-center"
                                    onClick={() => copyToClipboard('#previewCodeText')}><i className="ti ti-copy"></i>
                            </button>
                        </div>
                        <div className="card box-shadow-none code-preview">
                            <div className="card-body">
                                <pre><code className="language-html" id="previewCodeText"></code></pre>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mg-b-16">
                            <h4 className="text-white">Preview</h4>
                        </div>
                        <div className="card box-shadow-none code-preview">
                            <div className="card-body code-preview-div">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cheatsheet;