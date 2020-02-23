export const required = value => {
    if (value) return undefined;

    return 'Field is required';
}

export const lenghtCreator = (length) => (value) => {
    if (value && value.length != length) return `Length should be ${length} symbols`;

    return undefined
}
