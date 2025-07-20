import { BaseNode } from './baseNode';
import { delayNodeConfig } from './nodeConfigs/delayConfig';

export const DelayNode = (props) => <BaseNode {...props} config={delayNodeConfig} />;
