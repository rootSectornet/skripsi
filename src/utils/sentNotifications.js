'Order strict'; 
const nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
     user: '733370ead23671',
     pass: '6ae4a784d63f5f'
  }
});


var readHTMLFile = function(path, callback) {
  fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
      if (err) {
          throw err;
          callback(err);
      }
      else {
          callback(null, html);
      }
  });
};

sentCreateAccount = function(email, data){
  readHTMLFile(path.resolve('./public/mailtemplate/account.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
        username: "agus",
        link: "http://localhost:3000/cms-docs",
        password: "rootip",
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Informasi User dan Password',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

ReminderCapex = function(email, data){
  readHTMLFile(path.resolve('./public/mailtemplate/capexreminder.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
        tanggal: "12",
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder RKAP (H- ?)',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

ReminderLaporanKeuangan = function(email, data){
  readHTMLFile(path.resolve('./public/mailtemplate/reminderlk.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
        tanggal: "12",
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Keuangan Tahunan',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}


ReminderLaporanBulanan = function(email, data){
  readHTMLFile(path.resolve('./public/mailtemplate/reminderlk.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
        tanggal: "12",
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

NotifAwalPembentukan = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/awalpembentukan.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

LaporanRKAPCapex = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/laporanrkap.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

LaporanProyeksiCapex = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/laporanproyeksi.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

LaporanRealisasiCapex = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/capexrealisasi.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

LaporanRKAPLaporanKeuangan = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/lkrkap.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
      info : " telah mengisi informasi terkait RKAP laporan keuangan tahunan."
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

LaporanProyeksiLaporanKeuangan = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/lkrkap.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
      info : " telah mengisi informasi terkait proyeksi laporan keuangan bulanan"
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}


LaporanRealiasiLaporanKeuangan = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/lkrkap.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username,
      info : " telah mengisi informasi terkait realisasi laporan keuangan bulanan."
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

SetoranModal = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/setoranmodal.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}

Pinjaman = function(email, company,username){
  readHTMLFile(path.resolve('./public/mailtemplate/pinjaman.html'), function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      company: company,
      username: username
    };
    var htmlToSend = template(replacements);
    var message = {
        from: '9073585202-b61864@inbox.mailtrap.io',
        to : email,
        subject : 'Reminder Laporan Proyeksi dan Realisasi',
        html : htmlToSend
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  });
}
module.exports = { 
  sentCreateAccount,
  ReminderCapex,
  ReminderLaporanKeuangan,
  ReminderLaporanBulanan,
  NotifAwalPembentukan,
  LaporanRKAPCapex,
  LaporanProyeksiCapex,
  LaporanRealisasiCapex,
  LaporanRKAPLaporanKeuangan,
  LaporanProyeksiLaporanKeuangan,
  LaporanRealiasiLaporanKeuangan,
  SetoranModal,
  Pinjaman
} 