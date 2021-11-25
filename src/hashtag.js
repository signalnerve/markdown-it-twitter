import parser from './parser';

function flowdockHashtag(tokens, idx) {
  var tag = tokens[idx].content;
  var markup = tokens[idx].markup;
  return '<span class="hashtag">' + markup + tag + '</span>';
}

export default function(md, options) {
  const split = "#|＃";
  const hashtag = parser(md, 'hashtag', new RegExp(split));
  md.core.ruler.push('hashtag', hashtag);
  md.renderer.rules.hashtag = flowdockHashtag;
};
