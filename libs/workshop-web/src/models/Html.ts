export type HtmlClickableTag = 'a' | 'button' | 'command' | 'link';

export type HtmlContainerTag =
  | 'article'
  | 'aside'
  | 'details'
  | 'dialog'
  | 'div'
  | 'footer'
  | 'header'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'section'
  | 'ul';

export type HtmlHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HtmlBodyTextTag =
  | 'b'
  | 'blockquote'
  | 'code'
  | 'em'
  | 'i'
  | 'label'
  | 'mark'
  | 'p'
  | 'pre'
  | 'q'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup';

export type HtmlTextTag = HtmlHeadingTag | HtmlBodyTextTag;

export type HtmlMediaTag =
  | 'audio'
  | 'embed'
  | 'iframe'
  | 'progress'
  | 'source'
  | 'video';

export type HtmlTableTag =
  | 'col'
  | 'colgroup'
  | 'table'
  | 'tbody'
  | 'td'
  | 'tfoot'
  | 'thead'
  | 'tr';

export type HtmlFormTag =
  | 'datalist'
  | 'fieldset'
  | 'form'
  | 'input'
  | 'keygen'
  | 'label'
  | 'legend'
  | 'option'
  | 'optgroup'
  | 'textarea';

export type HtmlImageTag = 'caption' | 'figure' | 'img';

export type HtmlHeadTag = 'meta' | 'style' | 'title';

export type HtmlStructuralTag = 'html' | 'head' | 'body' | 'script';

export type HtmlTag =
  | HtmlClickableTag
  | HtmlContainerTag
  | HtmlTextTag
  | HtmlMediaTag
  | HtmlTableTag
  | HtmlFormTag
  | HtmlImageTag
  | HtmlHeadTag
  | HtmlStructuralTag;
