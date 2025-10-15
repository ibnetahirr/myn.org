"use client"
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs/index.js";
import React, {createRef, useEffect} from "react";
import {Col, Container, Row} from "reactstrap";

const KanbanBoardPage = () => {
    useEffect(() => {
        async function initMuuri() {
            const {default: Muuri} = await import('../../../vendor/kanban_board/muuri.min.js');
            const itemContainers = Array.from(document.querySelectorAll('.board-column-content'));
            const columnGrids = [];
            let boardGrid;

            itemContainers.forEach((container) => {
                const grid = new Muuri(container, {
                    items: '.board-item',
                    layoutDuration: 400,
                    layoutEasing: 'ease',
                    dragEnabled: true,
                    dragSort: () => columnGrids,
                    dragSortInterval: 0,
                    dragContainer: document.body,
                    dragReleaseDuration: 400,
                    dragReleaseEasing: 'ease',
                })
                    .on('dragStart', (item) => {
                        item.getElement().style.width = `${item.getWidth()}px`;
                        item.getElement().style.height = `${item.getHeight()}px`;
                    })
                    .on('dragReleaseEnd', (item) => {
                        item.getElement().style.width = '';
                        item.getElement().style.height = '';
                        columnGrids.forEach((grid) => grid.refreshItems());
                    })
                    .on('layoutStart', () => {
                        boardGrid.refreshItems().layout();
                    });

                columnGrids.push(grid);
            });

            boardGrid = new Muuri('.board', {
                layout: {
                    horizontal: true,
                },
                layoutDuration: 400,
                layoutEasing: 'ease',
                dragEnabled: true,
                dragSortInterval: 0,
                dragStartPredicate: {
                    handle: '.board-column-header',
                },
                dragReleaseDuration: 400,
                dragReleaseEasing: 'ease',
            });
        }

        initMuuri();
    }, []);
    return (
        <Container fluid>
            <Breadcrumbs mainTitle="Kanban Board" title="Apps" path={[" Kanban Board"]}/>
            <Row>
                <Col xs={12}>
                    <div className="kanban-board-container app-scroll">
                        <div className="board">
                            {/* To Do Column */}
                            <div className="board-column app-scroll">
                                <div className="board-column-header">
                                    <i className="ph-fill ph-list-bullets me-2 f-s-16"></i> To Do
                                </div>
                                <div className="board-column-content-wrapper">
                                    <div className="board-column-content">
                                        <div className="board-item">
                                            <div className="board-item-content">
                                                <h6 className="mb-0">Create homepage wireframe.</h6>
                                                <div className="board-footer">
                      <span className="badge text-bg-danger f-s-14">
                        <i className="ph-bold ph-clock-afternoon"></i> Nov 22
                      </span>
                                                    <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                    <span className="f-s-14 me-2">
                        <i className="ph-bold ph-chat-text"></i>
                        <span>2</span>
                      </span>
                                                    <span className="badge text-bg-primary f-s-14">
                        <i className="ph-bold ph-check-square-offset"></i> 1/2
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="board-item">
                                            <div className="board-item-content p-0">
                                                <div className="board-images">
                                                    <img
                                                        src="/images/profile-app/07.jpg"
                                                        alt="Profile"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="p-3">
                                                    <h6 className="mb-0">Draft new article content.</h6>
                                                    <div className="board-footer">
                        <span className="badge text-bg-danger f-s-14">
                          <i className="ph-bold ph-clock-afternoon"></i> Dec 19
                        </span>
                                                        <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                        <span className="f-s-14 me-2">
                          <i className="ph-bold ph-chat-text"></i>
                          <span>2</span>
                        </span>
                                                        <span className="badge text-bg-primary f-s-14">
                          <i className="ph-bold ph-check-square-offset"></i> 1/2
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="board-item">
                                            <div className="board-item-content">
                                                <h6 className="mb-0">Analyze client comments.</h6>
                                                <div className="board-footer">
                      <span className="badge text-bg-danger f-s-14">
                        <i className="ph-bold ph-clock-afternoon"></i> Sep 28
                      </span>
                                                    <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                    <span className="f-s-14 me-2">
                        <i className="ph-bold ph-chat-text"></i>
                        <span>2</span>
                      </span>
                                                    <span className="badge text-bg-primary f-s-14">
                        <i className="ph-bold ph-check-square-offset"></i> 1/2
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* IN PROGRESS Column */}
                            <div className="board-column app-scroll">
                                <div className="board-column-header">
                                    <i className="ph-bold ph-chart-line-up me-2 f-s-16"></i> IN PROGRESS
                                </div>
                                <div className="board-column-content-wrapper">
                                    <div className="board-column-content">
                                        <div className="board-item">
                                            <div className="board-item-content p-0">
                                                <div className="board-images">
                                                    <img
                                                        src="/images/profile-app/10.jpg"
                                                        alt="Profile"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="p-3">
                                                    <h6 className="mb-0">Prepare email marketing.</h6>
                                                    <div className="board-footer">
                        <span className="badge text-bg-danger f-s-14">
                          <i className="ph-bold ph-clock-afternoon"></i> Jul 10
                        </span>
                                                        <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                        <span className="f-s-14 me-2">
                          <i className="ph-bold ph-chat-text"></i>
                          <span>2</span>
                        </span>
                                                        <span className="badge text-bg-primary f-s-14">
                          <i className="ph-bold ph-check-square-offset"></i> 1/2
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* REVIEW Column */}
                            <div className="board-column app-scroll">
                                <div className="board-column-header">
                                    <i className="ph-bold ph-eye me-2 f-s-16"></i> REVIEW
                                </div>
                                <div className="board-column-content-wrapper">
                                    <div className="board-column-content">
                                        <div className="board-item">
                                            <div className="board-item-content">
                                                <h6 className="mb-0">Revise product listings.</h6>
                                                <div className="board-footer">
                      <span className="badge text-bg-danger f-s-14">
                        <i className="ph-bold ph-clock-afternoon"></i> Mar 27
                      </span>
                                                    <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                    <span className="f-s-14 me-2">
                        <i className="ph-bold ph-chat-text"></i>
                        <span>2</span>
                      </span>
                                                    <span className="badge text-bg-primary f-s-14">
                        <i className="ph-bold ph-check-square-offset"></i> 1/2
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="board-item">
                                            <div className="board-item-content">
                                                <h6 className="mb-0">Create initial app mockup.</h6>
                                                <div className="board-footer">
                      <span className="badge text-bg-danger f-s-14">
                        <i className="ph-bold ph-clock-afternoon"></i> Apr 09
                      </span>
                                                    <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                    <span className="f-s-14 me-2">
                        <i className="ph-bold ph-chat-text"></i>
                        <span>2</span>
                      </span>
                                                    <span className="badge text-bg-primary f-s-14">
                        <i className="ph-bold ph-check-square-offset"></i> 1/2
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DONE Column */}
                            <div className="board-column app-scroll">
                                <div className="board-column-header">
                                    <i className="ph-bold ph-check-square-offset me-2 f-s-16"></i> DONE
                                </div>
                                <div className="board-column-content-wrapper">
                                    <div className="board-column-content">
                                        <div className="board-item">
                                            <div className="board-item-content p-0">
                                                <div className="board-images">
                                                    <img
                                                        src="/images/profile-app/05.jpg"
                                                        alt="Profile"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="p-3">
                                                    <h6 className="mb-0">Compile financial data.</h6>
                                                    <div className="board-footer">
                        <span className="badge text-bg-danger f-s-14">
                          <i className="ph-bold ph-clock-afternoon"></i> Jul 24
                        </span>
                                                        <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                        <span className="f-s-14 me-2">
                          <i className="ph-bold ph-chat-text"></i>
                          <span>2</span>
                        </span>
                                                        <span className="badge text-bg-primary f-s-14">
                          <i className="ph-bold ph-check-square-offset"></i> 1/2
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TESTED Column */}
                            <div className="board-column app-scroll">
                                <div className="board-column-header">
                                    <i className="ph-bold ph-check-circle me-2 f-s-16"></i> TESTED
                                </div>
                                <div className="board-column-content-wrapper">
                                    <div className="board-column-content">
                                        <div className="board-item">
                                            <div className="board-item-content p-0">
                                                <div className="board-images">
                                                    <img
                                                        src="/images/profile-app/09.jpg"
                                                        alt="Profile"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="p-3">
                                                    <h6 className="mb-0">Gather market insights.</h6>
                                                    <div className="board-footer">
                        <span className="badge text-bg-danger f-s-14">
                          <i className="ph-bold ph-clock-afternoon"></i> Oct 04
                        </span>
                                                        <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                        <span className="f-s-14 me-2">
                          <i className="ph-bold ph-chat-text"></i>
                          <span>2</span>
                        </span>
                                                        <span className="badge text-bg-primary f-s-14">
                          <i className="ph-bold ph-check-square-offset"></i> 1/2
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="board-item">
                                            <div className="board-item-content">
                                                <h6 className="mb-0">Improve page load times.</h6>
                                                <div className="board-footer">
                      <span className="badge text-bg-danger f-s-14">
                        <i className="ph-bold ph-clock-afternoon"></i> Aug 23
                      </span>
                                                    <i className="ph-bold ph-list f-s-14 me-2"></i>
                                                    <span className="f-s-14 me-2">
                        <i className="ph-bold ph-chat-text"></i>
                        <span>2</span>
                      </span>
                                                    <span className="badge text-bg-primary f-s-14">
                        <i className="ph-bold ph-check-square-offset"></i> 1/2
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default KanbanBoardPage;
