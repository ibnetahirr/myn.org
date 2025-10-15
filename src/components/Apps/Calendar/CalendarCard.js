"use client"
import React, { useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

const CalendarCard = () => {
    useEffect(() => {
        setTimeout(() => {
            var calendarEl = document.getElementById('calendar');
            var calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin],
                initialView: 'dayGridMonth',
                navLinks: true,
                editable: true,
                dayMaxEvents: true,
                headerToolbar: {
                    left: 'prev,next,addEventButton',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                },
                customButtons: {
                    addEventButton: {
                        text: 'Add event...',
                        click: function () {
                            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                            var date = new Date(dateStr + 'T00:00:00');

                            if (!isNaN(date.valueOf())) {
                                calendar.addEvent({
                                    title: 'dynamic event',
                                    start: date,
                                    allDay: true
                                });
                                alert('Great. Now, update your database...');
                            } else {
                                alert('Invalid date.');
                            }
                        }
                    }
                },
                events: [
                    {
                        title: 'Events',
                        start: '2024-08-01',
                        end: '2024-08-02',
                    },
                    {
                        title: 'Events',
                        start: '2024-08-08',
                        end: '2024-08-12'
                    },
                    {
                        title: 'Events',
                        start: '2024-08-15',
                    },
                    {
                        title: 'Events',
                        start: '2024-08-30',
                        end: '2024-08-31',
                    },
                    {
                        title: 'Meeting',
                        start: '2024-08-12T10:30:00',
                        end: '2024-08-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2024-08-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2024-08-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2024-08-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2024-08-12T20:00:00'
                    },
                    {
                        groupId: 'availableForMeeting',
                        start: '2024-08-11T10:00:00',
                        end: '2024-08-11T16:00:00',
                        display: 'background'
                    },
                    {
                        groupId: 'availableForMeeting',
                        start: '2024-08-13T10:00:00',
                        end: '2024-08-13T16:00:00',
                        display: 'background'
                    },
                ],
                eventClick: function () {
                    $('#exampleModal').modal('show');
                },
                selectable: true,
                selectMirror: true,
                select: function () {
                    // var title = prompt('Event Title:');
                    // if (title) {
                    //     calendar.addEvent({
                    //         title: title,
                    //         start: arg.start,
                    //         end: arg.end,
                    //         allDay: arg.allDay
                    //     });
                    // }
                    // calendar.unselect();
                },
                droppable: true,
                drop: function (arg) {
                    if (document.getElementById('drop-remove').checked) {
                        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
                    }
                }
            });

            var containerEl = document.getElementById('events-list');
            new Draggable(containerEl, {
                itemSelector: '.list-event',
                eventData: function (eventEl) {
                    return {
                        title: eventEl.innerText.trim(),
                        start: new Date(),
                        className: eventEl.getAttribute('data-class')
                    };
                }
            });

            calendar.render(() => {
                calendar.setOption('selectable', false);
                calendar.setOption('droppable', true);
              });
        }, 500);
    }, []);

    return (
        <div className="card">
            <div className="card-body" id="mydraggable">
                <div id="calendar" className="app-calendar"></div>
            </div>
        </div>
    );
};

export default CalendarCard;
