class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,      :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,     :validate => true
  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Nouveau contact",
      :to => "staumont.antoine@me.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end

