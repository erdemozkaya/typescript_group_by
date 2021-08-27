/**
   * @param T `group by yapilacak nesnenin tipi verilmeli
   * 
   * orn; fatura satir vergi nesnesini taxCode a gore gruplamak icin :
   * this.globalSettingsService.groupBy<IInvoiceLineTax>(x=>[x.taxTax.taxCode],this.invoiceLineTax);
  */
  groupBy<T>(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ) {
    var helper = {};
    var result = [].concat.apply([], thisArg).reduce(function (r, o) {
      var key = predicate.apply(this, [o]);
      //var pre = predicate.toString().split('=>')[1].split(',').join('-').replace(/x./gim,'o.').replace('[','').replace(']','').replace(/ /g,'');

      if (!helper[key]) {
        helper[key] = Object.assign({}, o);
        helper[key].list = [];
        helper[key].list.push(Object.assign({}, o));
        r.push(helper[key]);
      } else {
        helper[key].list.push(Object.assign({}, o));
      }

      return r;
    }, []);

    return result;
  }
