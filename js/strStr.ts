export default function strStr(haystack: string, needle: string): number {
    let result = -1;

    for (let i = 0; i < haystack.length; i++) {
      const start = haystack.at(i);
      const end = haystack.at(i + needle.length - 1);

      if (!start || start !== needle.at(0)) {
        continue;
      }

      if (!end || end !== needle.at(-1)) {
        continue;
      }

      let match = true;

      for (let j = 1; j < needle.length - 1; j++) {
        if (haystack[i+j] !== needle[j]) {
          match = false;
          break;
        }  
      }

      if (match) {
        return i;
      }
    }

    return result;
};