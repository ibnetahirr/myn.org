"use client";

import React, {useEffect} from 'react';
import Prism from "prismjs";

const Prismjs = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="main-title">prismjs</h4>
                    </div>
                    <div className="col-sm-6 mt-sm-2">
                        <ul className="breadcrumb breadcrumb-start float-sm-end">
                            <li className="d-flex">
                                <i className="ti ti-briefcase f-s-16"></i>
                                <a href="#" className="f-s-14"> <span
                                    className="d-none d-md-block">Advanced UI</span></a>
                            </li>
                            <li className="d-flex active">
                                <a href="#" className="f-s-14">Prismjs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Dual Listboxes-html</h6>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                          <pre>
                                            <code className="language-html">
{`<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header code-header" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <h5>Select by class</h5>
                    <i class="ti ti-code source" data-source="dlb1"></i>
                </div>
                <div class="card-body">
                    <select class="select1" multiple>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>`}
                                            </code>
                                          </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Dual Listboxes-css</h6>
                                    </div>
                                    <div className="card-body">
                                        <pre>
                                            <code className="language-css">
{`.dual-listbox .dual-listbox__button {
    border-radius: 5px;
    background-color: rgba(var(--primary), 0.9);
    padding: 7px 12px;
}
.dual-listbox .dual-listbox__button:hover {
    background-color: rgba(var(--primary), 1);
    transition: all 0.3s ease;
}
.dual-listbox .dual-listbox__item.dual-listbox__item--selected {
    background-color: rgba(var(--primary), 0.1);
    color: rgba(var(--primary), 1);
}`}
  </code>
                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Dual Listboxes-scss</h6>
                                    </div>
                                    <div className="card-body">
                                        <pre className="h-390">
                                            <code className="language-css">
{`.dual-listbox {
    width: 100%;
    .dual-listbox__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: unset;
    }
    .dual-listbox__search {
        color: rgba(var(--secondary), 1);
        padding: 0.4rem 0.75rem;
        border: 1px solid var(--border_color);
        border-radius: 0.3rem;
        &:focus {
            color: rgba(var(--dark), 1);
            box-shadow: 0 0 0 0.25rem rgba(var(--primary), 0.3);
            border: 1px solid rgba(var(--primary), 1);
            outline: none;
        }
    }
    .dual-listbox__title {
        font-weight: 600;
        color: rgba(var(--dark), 0.60);
        padding: 0.6rem 1rem;
        border-radius: 0.3rem 0.3rem 0 0;
        border-color: rgba(var(--dark), 0.20);
    }
    .dual-listbox__available, .dual-listbox__selected {
        border-radius: 0 0 0.3rem 0.3rem;
        border: 1px solid rgba(var(--dark), 0.20);
    }
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Dual Listboxes-javascript</h6>
                                    </div>
                                    <div className="card-body">
                                        <pre>
                                            <code className="language-javascript">
{`var dlb4 = new DualListbox(".select4", {
    showSortButtons: true,
});
var sources = document.querySelectorAll(".source");
for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    source.addEventListener("click", function(event) {
        var code = document.querySelector("." + event.currentTarget.dataset.source);
        code.classList.toggle("open");
    });
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prismjs;