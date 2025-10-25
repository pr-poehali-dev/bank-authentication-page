import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [userType, setUserType] = useState<'client' | 'employee'>('client');
  const [loginMethod, setLoginMethod] = useState<'passport' | 'phone'>('passport');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <Icon name="Building2" className="text-primary-foreground" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Цифровой Банк</h1>
          <p className="text-muted-foreground">Безопасный вход в систему</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-4">
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              <Button
                variant={userType === 'client' ? 'default' : 'ghost'}
                className="flex-1 transition-all duration-200"
                onClick={() => setUserType('client')}
              >
                <Icon name="User" size={18} className="mr-2" />
                Клиент
              </Button>
              <Button
                variant={userType === 'employee' ? 'default' : 'ghost'}
                className="flex-1 transition-all duration-200"
                onClick={() => setUserType('employee')}
              >
                <Icon name="Briefcase" size={18} className="mr-2" />
                Сотрудник
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {userType === 'client' ? (
              <div className="space-y-6">
                <Tabs value={loginMethod} onValueChange={(v) => setLoginMethod(v as 'passport' | 'phone')} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="passport" className="gap-2">
                      <Icon name="CreditCard" size={16} />
                      По паспорту
                    </TabsTrigger>
                    <TabsTrigger value="phone" className="gap-2">
                      <Icon name="Phone" size={16} />
                      По телефону
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="passport" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="passport">Номер паспорта</Label>
                      <div className="relative">
                        <Icon name="IdCard" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="passport"
                          type="text"
                          placeholder="0000 000000"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passport-password">Пароль</Label>
                      <div className="relative">
                        <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="passport-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="phone" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона</Label>
                      <div className="relative">
                        <Icon name="Smartphone" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-password">Пароль</Label>
                      <div className="relative">
                        <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-muted-foreground">Запомнить меня</span>
                  </label>
                  <a href="#" className="text-primary hover:underline font-medium">
                    Забыли пароль?
                  </a>
                </div>

                <Button className="w-full h-11 text-base font-semibold" size="lg">
                  <Icon name="LogIn" size={20} className="mr-2" />
                  Войти
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Нет аккаунта?{' '}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Зарегистрироваться
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <CardDescription className="text-center">
                  Вход для сотрудников банка
                </CardDescription>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Корпоративная почта</Label>
                    <div className="relative">
                      <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="username@bank.ru"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employee-password">Пароль</Label>
                    <div className="relative">
                      <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="employee-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-muted-foreground">Запомнить меня</span>
                  </label>
                  <a href="#" className="text-primary hover:underline font-medium">
                    Забыли пароль?
                  </a>
                </div>

                <Button className="w-full h-11 text-base font-semibold" size="lg">
                  <Icon name="ShieldCheck" size={20} className="mr-2" />
                  Войти в систему
                </Button>

                <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                  <Icon name="Info" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Используйте учетные данные, выданные IT-отделом. При возникновении проблем обращайтесь в поддержку.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Icon name="Shield" size={16} className="inline mr-1" />
          Защищено SSL-шифрованием
        </div>
      </div>
    </div>
  );
}
