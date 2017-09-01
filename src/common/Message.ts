/**
 * Definition of messages sent between content and
 * background scripts.
 */
import {ContentMessageKind} from 'common/messageKinds';

export default interface Message {
  kind: ContentMessageKind;
}
