import { TestBed, inject, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let registerUrl = "http://localhost:3000/api/user/register";
  let loginUrl = "http://localhost:3000/api/user/login";

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientTestingModule],
        providers: [
          AuthService
        ]
      });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('registerUser()', () => {
    it('should register user', () => {
      inject(
        [AuthService, HttpTestingController],
        (backend: HttpTestingController) => {
          // set up
          const mockUser = {
            firstName: 'johnny',
            lastName: 'gardner',
            email: 'jon@gmail.com',
            pid: 123,
            totalStars: 0,
            password: '1234jasd'
          }
          let responseObject = {
            firstName: 'johnny'
          }
          let response = null;

          // calling the behavior
          service.registerUser(mockUser).subscribe(
            res => {
              response = res;
            }
          )

          const requestWrapper = backend.expectOne({ url: registerUrl });
          requestWrapper.flush(responseObject);

          tick();

          // expectation
          expect(requestWrapper.request.method).toEqual('POST');
          expect(response.body).toEqual(responseObject);
          expect(response.status).toBe(200);
        }
      )
    });

    it('should not register user because lastName is null', () => {
      inject(
        [AuthService, HttpTestingController],
        (backend: HttpTestingController) => {
          // set up
          const mockUser = {
            firstName: 'johnny',
            lastName: '',
            email: 'jon@gmail.com',
            pid: 123,
            totalStars: 0,
            password: '1234jasd'
          }

          // calling the behavior
          service.registerUser(mockUser).subscribe(
            res => {
            },
            err => {
              expect(err.status).toEqual(400);
            }
          )

          const requestWrapper = backend.expectOne({ url: registerUrl });
          requestWrapper.flush('400 error', { status: 400 });
        }
      )
    });
  });
  describe('loginUser()', () => {
    it('should login user succesfully', () => {
      inject(
        [AuthService, HttpTestingController],
        (backend: HttpTestingController) => {
          const loginUser = {
            email: 'kopp@gmail.com',
            password: 'rhino11'
          }
          let response = null;

          service.loginUser(loginUser).subscribe(
            res => {
              response = res;
            }
          )

          const requestWrapper = backend.expectOne({ url: loginUrl });

          tick();

          // expectation
          expect(requestWrapper.request.method).toEqual('POST');
          expect(response.status).toBe(200);
        });
    });
    it('should throw an error when logging in', () => {
      inject(
        [AuthService, HttpTestingController],
        (backend: HttpTestingController) => {
          const loginUser = {
            email: 'kopp@gmail.com',
            password: 'rhino12'
          }
          let response = null;

          service.loginUser(loginUser).subscribe(
            res => {
              response = res;
            },
            err => {
              expect(err.status).toEqual(400);
            }
          )
        });
    });

  });
});
