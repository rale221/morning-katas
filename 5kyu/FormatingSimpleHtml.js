// https://www.codewars.com/kata/5b4665ba19b10e641a000015/train/javascript

// Task

// Format a source in a simple HTML-dialect.

// A source consists of tags and text.
// It is not necessarily valid HTML, or a complete document ( it may be a snippet ).

// Tags and text

// Tags are either matching opening and closing tags ( <tag>content</tag> ), or self-closed ( <tag /> ).
// All tags* need to be on their own line. There are no inline tags.
// Content between opening and closing tags should be indented.
// No whitespace ( other than indent/newline ) should be before or after tags.

// All ( consecutive ) text needs to be on its own line.
// Text may have spurious whitespace. This needs to be collapsed to single spaces.
// ( Do not reformat whitespace inside tags. )
// Text should not begin or end with whitespace ( other than indent/newline ).

// * Exception: the <br /> tag, when not after a tag, should be after its text without an intervening newline.
// It should be followed by a newline.

// Details

// Newlines must be \n
// Indents must be two spaces per level
// Whitespace in text must be single spaces
// Reformatted source must end with a newline
// There will be a sanity check: repeated application should not change the output
// All input is valid
// There will be no whitespace in tags until after the tag ( <tag or </tag ), and
// there will be no whitespace directly before the closing > ( tag> or /> )
// Preloaded

// For testing and debugging, escHTML and escWS have been predefined;
// they escape HTML special characters ( & < > ) and whitespace ( tab, newline and space ) respectively for printing to the console.
// When using both, apply escWS after escHTML, or your spaces will come out as &amp;space;.

function indent(source) {
	// console.log(escWS(escHTML(source)))
	if (source === '') {
		return '';
	}
	const tags = /<(\/)?[^>]+>/g; // (?!br\s*\/?)
	let result = [];
	let depth = 0;
	let lastIndex = 0;
	let isPreviousChunkTag = false;
	while ((match = tags.exec(source))) {
		tag = match[0];
		if (!tag) {
			return source;
		}
		const content = source
			.substring(lastIndex, match.index)
			.replace(/\n+/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
		if (content.length > 0) {
			result.push(' '.repeat(2 * depth) + content);
			isPreviousChunkTag = false;
		}
		const isOpeningTag = tag[1] !== '/';
		if (isOpeningTag) {
			const isSelfClosing = tag[tag.length - 2] === '/';
			const isBr = /^<br\s+\/?>$/.test(tag);
			if (isBr && !isPreviousChunkTag) {
				if (result.length - 1 < 0) {
					result.push('');
				}
				result[result.length - 1] = result[result.length - 1] + tag;
			} else {
				result.push(' '.repeat(2 * depth) + tag);
			}
			if (!isSelfClosing) {
				depth++;
			}
		} else {
			depth--;
			result.push(' '.repeat(2 * depth) + tag);
		}
		isPreviousChunkTag = true;
		lastIndex = match.index + tag.length;
	}
	if (lastIndex < source.length) {
		const content = source
			.substring(lastIndex, source.length)
			.replace(/\n+/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
		if (content.length > 0) {
			result.push(' '.repeat(2 * depth) + content);
			isPreviousChunkTag = false;
		}
	}
	if (result.length === 0) {
		return (source + '\n').replace(/\n+/g, '\n');
	}
	let newResult = result.join('\n');
	newResult = newResult.replace(/(?!\n)\n+/g, ' ') + '\n';
	newResult = newResult.replace(/\n+/g, '\n');
	return newResult;
}
