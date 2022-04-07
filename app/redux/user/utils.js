/**
 * created by Inspire UI @author(dang@inspireui.com)
 * @format
 */

import moment from "moment";
import { findIndex, filter } from "lodash";

export const isExpired = (expiresAt) => {
  const b = moment(expiresAt);
  const c = b.diff(moment());
  if (c > 0) {
    return false;
  }

  return true;
};

