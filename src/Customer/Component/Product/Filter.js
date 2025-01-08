export const colors = [
    'blue',
    'green',
    'red',
    'lightgray',
    'darkslategray',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'cyan',
    'magenta'
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' },
            { value: 'green', label: 'Green' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'purple', label: 'Purple' }
        ]
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 's', label: 'Small' },
            { value: 'm', label: 'Medium' },
            { value: 'l', label: 'Large' }
        ]
    }
];

export const singleFilter = [
    {
        id: 'price',
        name: 'Price Range',
        options: [
            { value: '0-500', label: '₹0 - ₹500' },
            { value: '501-1000', label: '₹501 - ₹1000' },
            { value: '1001-2000', label: '₹1001 - ₹2000' },
            { value: '2001-5000', label: '₹2001 - ₹5000' },
            { value: '5001-10000', label: '₹5001 - ₹10000' },
            { value: '10001-20000', label: '₹10001 - ₹20000' },
            { value: '20001-50000', label: '₹20001 - ₹50000' }
        ]
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '0-5', label: '0% - 5%' },
            { value: '6-10', label: '6% - 10%' },
            { value: '11-15', label: '11% - 15%' },
            { value: '16-20', label: '16% - 20%' },
            { value: '21-25', label: '21% - 25%' },
            { value: '26-30', label: '26% - 30%' },
            { value: '31-35', label: '31% - 35%' },
            { value: '36-40', label: '36% - 40%' },
            { value: '41-50', label: '41% - 50%' },
            { value: '51+', label: '51% and above' }
        ]
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            { value: 'in-stock', label: 'In Stock' },
            { value: 'out-of-stock', label: 'Out of Stock' },
            { value: 'pre-order', label: 'Pre-order' }
        ]
    }
];