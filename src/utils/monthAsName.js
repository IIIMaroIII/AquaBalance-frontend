const monthAsName = date => {
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    return { month };
};

export default monthAsName;