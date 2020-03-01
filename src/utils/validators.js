export const required = value => {
    if (value) return undefined;

    return 'Field is required';
}

export const lenghtCreator = (length) => (value) => {
    if (value && value.length > length) return `Length more than ${length} symbols`;
    if (value && value.length < length) return `Length less than ${length} symbols`;

    return undefined
}
