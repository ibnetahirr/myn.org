"use client";

import React, {memo,useMemo} from 'react';
import SingleCheatSheet from "@/components/uiKits/Cheatsheet/SingleCheatSheet";
import {avatarsData} from "@/Data/Cheatsheet/avatar";
import {badgesData} from "@/Data/Cheatsheet/badges";
import {alertsData} from "@/Data/Cheatsheet/alerts";
import {buttonsData} from "@/Data/Cheatsheet/buttons";
import {cardsData} from "@/Data/Cheatsheet/cards";
import {dropdownData} from "@/Data/Cheatsheet/dropdown";
import {tabsData} from "@/Data/Cheatsheet/tabs";
import {accordionsData} from "@/Data/Cheatsheet/accordions";
import {background} from "@/Data/Cheatsheet/background";
import {progressData} from "@/Data/Cheatsheet/progressData";
import {helperClassNamesData} from "@/Data/Cheatsheet/helperClassNamesData";
import {dividerData} from "@/Data/Cheatsheet/dividerData";
import {ribbonData} from "@/Data/Cheatsheet/ribbonData";


const CheatSheetBlocks = memo(() => {

    const badgeList = useMemo(()=> badgesData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[badgesData]);
    const alertLists = useMemo(()=> alertsData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[alertsData]);
    const buttonLists = useMemo(()=> buttonsData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[buttonsData]);
    const cardsLists = useMemo(()=> cardsData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[cardsData]);
    const dropdownLists = useMemo(()=> dropdownData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[dropdownData]);
    const avatarsLists = useMemo(()=> avatarsData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[avatarsData]);
    const tabsLists = useMemo(()=> tabsData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[tabsData]);
    const accordionsLists = useMemo(()=> accordionsData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[accordionsData]);
    const backgroundLists = useMemo(()=> background.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[background]);
    const progressLists = useMemo(()=> progressData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[progressData]);
    const helperClassNamesDataLists = useMemo(()=> helperClassNamesData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[helperClassNamesData]);
    const dividerDataLists = useMemo(()=> dividerData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[dividerData]);
    const ribbonDataLists = useMemo(()=> ribbonData.map((badge,index) => <SingleCheatSheet badge={badge} key={index}/>),[ribbonData]);

    return (
        <>
            <div className="col-12">
                <div className="cheatsheet-blocks">
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#badges" aria-expanded="false" aria-controls="badges">
                                badges
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="badges">
                            <ul>{badgeList}</ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#alerts" aria-expanded="false" aria-controls="alerts">
                                alerts
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="alerts">
                            <ul> {alertLists} </ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#buttons" aria-expanded="false" aria-controls="buttons">
                                Button
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="buttons">
                            <ul> {buttonLists} </ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#cards" aria-expanded="false" aria-controls="cards">
                                Cards
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="cards">
                            <ul> {cardsLists} </ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#dropdown" aria-expanded="false"
                               aria-controls="dropdown">
                                Dropdown
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="dropdown">
                            <ul> {dropdownLists} </ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#avtar" aria-expanded="false" aria-controls="avtar">
                                Avtar
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="avtar">
                            <ul> {avatarsLists} </ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#tabs" aria-expanded="false" aria-controls="tabs">
                                Tabs
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="tabs">
                            <ul>{tabsLists}</ul>
                        </div>
                    </div>
                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#accordions" aria-expanded="false"
                               aria-controls="accordions">
                                Accordions
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="accordions">
                            <ul>{accordionsLists}</ul>
                        </div>
                    </div>

                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#background" aria-expanded="false"
                               aria-controls="background">
                                Background
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="background">
                            <ul>{backgroundLists}</ul>/
                        </div>
                    </div>

                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#progress" aria-expanded="false"
                               aria-controls="progress">
                                Progress
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="progress">
                            <ul>{progressLists}</ul>
                        </div>
                    </div>

                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#helperclassName" aria-expanded="false"
                               aria-controls="helperclassName">
                                Helper classNames
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="helperclassName">
                            <ul>{helperClassNamesDataLists}</ul>
                        </div>
                    </div>

                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#divider" aria-expanded="false" aria-controls="divider">
                                Divider
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="divider">
                            <ul>{dividerDataLists}</ul>
                        </div>
                    </div>

                    <div className="card cheatsheets-card box-template-list toggle-card">
                        <div className="card-header p-0">
                            <a className="btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name"
                               data-bs-toggle="collapse" href="#ribbon" aria-expanded="false" aria-controls="ribbon">
                                Ribbon
                            </a>
                        </div>
                        <div className="collapse card-body show p-0" id="ribbon">
                            <ul>{ribbonDataLists}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default CheatSheetBlocks;