import AbsQuery from './AbsQuery';
import { Query } from '../Query';
import { IArgument } from '../IArgument';
import InfluxArgument from './InfluxArgument';

class InfluxQuery extends AbsQuery{
  getArgument(): IArgument {
    return new InfluxArgument();
  }

  or(condition: { [index: string]: any; }): Query {
    throw new Error("Method not implemented.");
  }

  select(fields: string): Query {
    this._fields = fields;
    return this;
  }

  groupBy(groupBy: string): Query {
    this._groupBy = groupBy;
    return this;
  }

}

export default InfluxQuery;
export {
  InfluxQuery
};