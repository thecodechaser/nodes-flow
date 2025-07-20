// llmNode.js

import { BaseNode } from './baseNode';
import { llmNodeConfig } from './nodeConfigs/llmConfig';

export const LLMNode = (props) => <BaseNode {...props} config={llmNodeConfig} />;

