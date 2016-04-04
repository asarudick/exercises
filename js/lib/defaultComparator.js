export default function defaultCmp (a, b) {
    const result = a - b;

    if (result > 0)
    {
        return 1;
    }

    if (result < 0)
    {
        return -1;
    }

    return 0;
};
