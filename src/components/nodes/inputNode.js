// inputNode.js

import { BaseNode } from './baseNode';
import { inputNodeConfig } from './nodeConfigs/inputConfig';

export const InputNode = (props) => <BaseNode {...props} config={inputNodeConfig} />;

