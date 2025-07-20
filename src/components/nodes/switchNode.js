import { BaseNode } from './baseNode';
import { switchNodeConfig } from './nodeConfigs/switchConfig';

export const SwitchNode = (props) => <BaseNode {...props} config={switchNodeConfig} />;
