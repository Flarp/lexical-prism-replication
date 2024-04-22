import { $createCodeHighlightNode, CodeHighlightNode } from '@lexical/code'

import {createEditor} from 'lexical';

const config = {
  namespace: 'MyEditor',
  onError: console.error,
  nodes: [CodeHighlightNode]
};

const editor = createEditor(config);

editor.update(() => {
    const node = $createCodeHighlightNode("test", "cpp")
    console.log(node)
})