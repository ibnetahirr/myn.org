const countriesReport = [
    {country: 'USA', flag: 'usa', progress: 60, color: 'primary'},
    {country: 'Australia', flag: 'aus', progress: 20, color: 'success'},
    {country: 'Canada', flag: 'can', progress: 58, color: 'danger'},
    {country: 'New Zealand', flag: 'nzl', progress: 60, color: 'info'},
    {country: 'Italy', flag: 'ita', progress: 40, color: 'warning'},
];
const browserData  = [
    { name: 'Chrome', imgPath:'/images/dashboard/analytics/chrome.png', version: '10.3.0', change: 8098, icon: 'ti-brand-chrome', bgColor: 'bg-light-primary', changeType: 'up', changeColor: 'text-success' },
    { name: 'Opera', imgPath:'/images/dashboard/analytics/opera.png', version: '11.3.2', change: 5932, icon: 'ti-brand-opera', bgColor: 'bg-light-success', changeType: 'down', changeColor: 'text-danger' },
    { name: 'Edge', imgPath:'/images/dashboard/analytics/microsoft.png',version: '8.3.0', change: 2905, icon: 'ti-brand-chrome', bgColor: 'bg-light-danger', changeType: 'down', changeColor: 'text-danger' },
    { name: 'Firefox', imgPath:'/images/dashboard/analytics/firefox.png', version: '6.2.0', change: 8905, icon: 'ti-brand-firefox', bgColor: 'bg-light-info', changeType: 'up', changeColor: 'text-success' },
    { name: 'Others',imgPath:'/images/dashboard/analytics/medium.png', version: '10.9.0', change: 6849, icon: 'ti-browser-check', bgColor: 'bg-light-dark', changeType: 'up', changeColor: 'text-success' },
];
const transactions= [
    { name: 'Starbucks', method: 'Wallet', amount: '$500.00', imgSrc: '/images/avatar/1.png', bgColor: 'text-bg-primary' },
    { name: 'Food Order', method: 'Online', amount: '$480.89', imgSrc: '/images/avatar/2.png', bgColor: 'text-bg-secondary' },
    { name: 'Refund', method: 'Transfer', amount: '$687.57', imgSrc: '/images/avatar/3.png', bgColor: 'text-bg-success' },
    { name: 'Send Money', method: 'Visa', amount: '$900.00', imgSrc: '/images/avatar/6.png', bgColor: 'text-bg-danger' },
    { name: 'Order Phone', method: 'Credit Card', amount: '$1,094.00', imgSrc: '/images/avatar/4.png', bgColor: 'text-bg-info' },
];
const visitorsData = [
    {
        name: 'John Smith',
        id: '#012',
        avatars: [
            { src: '/images/avatar/08.png', tooltip: '', bgColor: 'text-bg-secondary' },
            { src: '/images/avatar/16.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-dark' },
            { src: '/images/avatar/10.png', tooltip: 'Maya Horton', bgColor: 'text-bg-secondary' },
        ],
        checkInTime: '09:00 AM',
        checkOutTime: '11:00 AM',
        rate: '30.2%',
    },
    {
        name: 'Jane Doe',
        id: '#867',
        avatars: [
            { src: '/images/avatar/08.png', tooltip: '', bgColor: 'text-bg-secondary' },
            { src: '/images/avatar/12.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-dark' },
        ],
        checkInTime: '10:30 AM',
        checkOutTime: '11:30 AM',
        rate: '86.3%',
    },
    {
        name: 'Mark Johnson',
        id: '#674',
        avatars: [
            { src: '/images/avatar/2.png', tooltip: '', bgColor: 'text-bg-primary' },
            { src: '/images/avatar/08.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-success' },
            { src: '/images/avatar/10.png', tooltip: 'Maya Horton', bgColor: 'text-bg-secondary' },
        ],
        checkInTime: '01:00 PM',
        checkOutTime: '02:00 PM',
        rate: '10%',
    },
    {
        name: 'Emily Davis',
        id: '#364',
        avatars: [
            { src: '/images/avatar/12.png', tooltip: '', bgColor: 'text-bg-secondary' },
            { src: '/images/avatar/07.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-dark' },
            { src: '/images/avatar/5.png', tooltip: 'Maya Horton', bgColor: 'text-bg-danger' },
            { src: '/images/avatar/14.png', tooltip: 'Maya Horton', bgColor: 'text-bg-warning' },
        ],
        checkInTime: '09:00 AM',
        checkOutTime: '11:00 AM',
        rate: '55.4%',
    },
    {
        name: 'Michael Brown',
        id: '#453',
        avatars: [
            { src: '/images/avatar/08.png', tooltip: '', bgColor: 'text-bg-dark' },
            { src: '/images/avatar/16.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-primary' },
            { src: '/images/avatar/10.png', tooltip: 'Maya Horton', bgColor: 'text-bg-secondary' },
        ],
        checkInTime: '09:45 AM',
        checkOutTime: '10:00 AM',
        rate: '99.2%',
    },
    {
        name: 'James Anderson',
        id: '#769',
        avatars: [
            { src: '/images/avatar/08.png', tooltip: '', bgColor: 'text-bg-light' },
            { src: '/images/avatar/16.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-warning' },
        ],
        checkInTime: '08:00 AM',
        checkOutTime: '09:00 AM',
        rate: '10.2%',
    },
    {
        name: 'Sarah Wilson',
        id: '#048',
        avatars: [
            { src: '/images/avatar/09.png', tooltip: '', bgColor: 'text-bg-success' },
            { src: '/images/avatar/11.png', tooltip: 'Lennon Briggs', bgColor: 'text-bg-danger' },
            { src: '/images/avatar/10.png', tooltip: 'Maya Horton', bgColor: 'text-bg-secondary' },
        ],
        checkInTime: '11:00 AM',
        checkOutTime: '12:00 PM',
        rate: '20.2%',
    },
];

export { countriesReport, browserData, transactions, visitorsData };
